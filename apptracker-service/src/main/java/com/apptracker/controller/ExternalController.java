package com.apptracker.controller;

import com.apptracker.service.ExternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ExternalController {

    @Autowired
    private ExternalService externalService;

    //TODO Session management
    //TODO add filters( OR like....)

    @RequestMapping(value = "/cand/{token}", method = RequestMethod.GET)
    public String gotoNextPage(@PathVariable String token, Model model) {
        model.addAttribute("aid", "next page");
        String id = externalService.authenticate(token);
        return "redirect:../index.html#/idrf/personal/" + id;
    }

}
