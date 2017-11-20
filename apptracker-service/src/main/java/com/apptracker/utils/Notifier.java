package com.apptracker.utils;

/**
 * Created by Murthy on 7/25/2017.
 */

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

public class Notifier {

    // SMTP info
    private static final String host = "smtp.gmail.com";
    private static final String port = "587";
    //TODO
    private static final String mailFrom = "ml.247711@gmail.com";
    private static final String userName = mailFrom;
    private static final String password = "";


    public static void sendEmail(String[] toAddress, String[] copyAddress,
                                 String subject, String message, String[] attachFiles) throws MessagingException {
        sendEmail(host, port, userName, password, toAddress, copyAddress, subject, message, attachFiles);
    }

    private static void sendEmail(String host, String port,
                                 final String userName, final String password, String[] toAddress, String[] copyAddress,
                                 String subject, String message, String[] attachFiles)
            throws AddressException, MessagingException {
        // sets SMTP server properties
        Properties properties = new Properties();
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.user", userName);
        properties.put("mail.password", password);

        // creates a new session with an authenticator
        Authenticator auth = new Authenticator() {
            public PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(userName, password);
            }
        };
        Session session = Session.getInstance(properties, auth);

        // creates a new e-mail message
        Message msg = new MimeMessage(session);

        msg.setFrom(new InternetAddress(userName));
        /*List<InternetAddress> in = Arrays.stream(toAddress)
                .map(toAdd -> internetAddress(toAdd))
                .collect(Collectors.toList());

        InternetAddress[] toAddresses = new InternetAddress[in.size()];*/
        msg.setRecipients(Message.RecipientType.TO, addresses(toAddress));
        if (copyAddress != null && copyAddress.length > 0)
            msg.setRecipients(Message.RecipientType.CC, addresses(copyAddress));
        msg.setSubject(subject);
        msg.setSentDate(new Date());

        // creates message part
        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent(message, "text/html");

        // creates multi-part
        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);

        // adds attachments
        if (attachFiles != null && attachFiles.length > 0) {
            for (String filePath : attachFiles) {
                MimeBodyPart attachPart = new MimeBodyPart();

                try {
                    attachPart.attachFile(filePath);
                } catch (IOException ex) {
                    ex.printStackTrace();
                }

                multipart.addBodyPart(attachPart);
            }
        }

        // sets the multi-part as e-mail's content
        msg.setContent(multipart);

        // sends the e-mail
        Transport.send(msg);

    }

    private static InternetAddress[] addresses(String[] adresses){
        List<InternetAddress> in = Arrays.stream(adresses)
                .map(toAdd -> internetAddress(toAdd))
                .collect(Collectors.toList());

        InternetAddress[] toAddresses = new InternetAddress[in.size()];
        return in.toArray(toAddresses);
    }

    private static InternetAddress internetAddress(String add){
        try {
            return new InternetAddress(add);
        } catch (AddressException e) {
            e.printStackTrace();
        }
        return null;
    }


    /**
     * Test sending e-mail with attachments
     */
    /*public static void main(String[] args) {


        // message info
        String[] mailTo ={ "ml.247711@gmail.com"};
        String subject = "New email with attachments";
        String message = "I have some attachments for you.";
      // String[]  copyTo = { "gsvsnmurthy@gmail.com"};
        String[]  copyTo = null;

        // attachments
        String[] attachFiles = new String[1];
        attachFiles[0] = "C:\\Users\\Murthy\\Downloads\\Apptracker-Plan.xlsx";
       // attachFiles[1] = "e:/Test/Music.mp3";
       // attachFiles[2] = "e:/Test/Video.mp4";

        try {
            sendEmail(host, port, mailFrom, password, mailTo, copyTo,
                    subject, message, attachFiles);
            System.out.println("Email sent.");
        } catch (Exception ex) {
            System.out.println("Could not send email.");
            ex.printStackTrace();
        }
    }
*/


}