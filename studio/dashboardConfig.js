export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-bfyazphr',
                  apiId: '2bc60cfe-2a5d-4889-bc5a-db81683a9262'
                },
                {
                  buildHookId: '6212b66d8b23245dd2ea9f5a',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-hhwa8cvf',
                  apiId: 'fa500a88-9f7f-40c8-a999-f7287bfe5fc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fingineer/sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-web-hhwa8cvf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
