const query = `
    query test($navId:String!){
        NavigationPreloadManager(where: $navId){
            Nav id
            link {
                externalUrl
                displayText
                page {
                    ... on page{
                        id
                        slug
                    }
                }
            }
        }
        navId    
}
`
