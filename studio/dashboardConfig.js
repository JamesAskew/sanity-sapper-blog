export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5feb4aba17578e3a6b2fb22b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-bmvka6q3',
                  apiId: 'c113c3a4-f8ae-415c-b844-05bee3192407'
                },
                {
                  buildHookId: '5feb4aba3eae195527b111c1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-hk6k2ji8',
                  apiId: '6ddc0595-4e7d-4a65-848d-19495750b0bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JamesAskew/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-hk6k2ji8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
