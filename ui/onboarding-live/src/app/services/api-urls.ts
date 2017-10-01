export const APIURLs = {
    'getCandidateDetails': {
        default: '/candidate',// default is used if env specific URL not specified
        dev: '/candidateDetail.json?',// This will overwrite default
        qa: '/candidate',
        prod: '/candidate',
        isExternal: false
    },
    'candidateList': {
        default: '/onboard/list',
        dev: '/onboardList.json?'
    },
    'addCandidate': {
        default: '/candidate/add',
        dev: '/addCandidate.json?'
    },
    'updateCandidate': {
        default: '/candidate/update'
    },
   'getContracts': {
        default: '/contract',// default is used if env specific URL not specified
        dev: '/contractsDetails.json?',// This will overwrite default
        qa: '/contract',
        prod: '/contract',
        isExternal: false
    },
    'addUpdateContracts': {
        default: '/contract',// default is used if env specific URL not specified
        dev: '/contract',// This will overwrite default
        qa: '/contract',
        prod: '/contract',
        isExternal: false
    }

};
