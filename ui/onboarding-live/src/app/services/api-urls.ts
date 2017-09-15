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
      default: '/contracts',// default is used if env specific URL not specified
      dev: '/contractsDetails.json?',// This will overwrite default
      qa: '/contracts',
      prod: '/contracts',
      isExternal: false
    },
  'addUpdateContracts': {
    default: '/addUpdateContracts',// default is used if env specific URL not specified
    dev: '/addUpdateContracts',// This will overwrite default
    qa: '/addUpdateContracts',
    prod: '/addUpdateContracts',
    isExternal: false
  }

};
