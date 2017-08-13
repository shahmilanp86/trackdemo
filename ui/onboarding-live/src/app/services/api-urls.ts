export const APIURLs = {
    'getCandidateDetails': {
        default: '/candidates',// default is used if env specific URL not specified
        dev: '/candidateDetails.json?',// This will overwrite default
        qa: '/candidates',
        prod: '/candidates',
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
        default: '/contracts'
    }    

};