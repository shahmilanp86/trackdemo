export const APIURLs = {
    'getCandidateDetails': {
        default: '/candidate',// default is used if env specific URL not specified
        dev: '/candidateDetails.json?',// This will overwrite default
        qa: '/candidate',
        prod: '/candidate',
        isExternal: false
    },
    'candidateList': {
        default: '/candidates/all',
        dev: '/allCandidate.json?'
    },
    'addCandidate': {
        default: '/candidates/add',
        dev: '/addCandidate.json?'
    },
    'updateCandidate': {
        default: '/candidates/update'
    },
   'getContracts': {
        default: '/contract',// default is used if env specific URL not specified
        dev: '/contractsDetails.json?',// This will overwrite default
        qa: '/contract',
        prod: '/contract',
        isExternal: false
    },
    'addUpdateContracts': {
        default: '/contract/update',// default is used if env specific URL not specified
        dev: '/contract/update',// This will overwrite default
        qa: '/contract/update',
        prod: '/contract/update',
        isExternal: false
    }

};
