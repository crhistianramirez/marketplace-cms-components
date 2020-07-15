import { moduleMetadata } from '@storybook/angular';
import { CmsAdminModule, CmsPageEditorComponent } from '../public-api';
export default {
  title: 'Page Editor',
  component: CmsPageEditorComponent,
  parameters: {
    component: CmsPageEditorComponent
  },
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [
        CmsAdminModule.forRoot()
      ],
    })
  ]
};
export const FullExample = () => ({
  component: CmsPageEditorComponent,
  template: `<div class="jumbotron">
  <div class="container">
    <h1>Page Editor Demonstration</h1>
  </div>
</div>
<div class="container">
  <cms-page-editor
    [renderSiteUrl]="buyerSiteUrl"
    [editorOptions]="editorOptions"
  ></cms-page-editor>
  <cms-asset-list></cms-asset-list>
</div>
`,
  props: {
    ocToken: '',
    editorOptions: {
      ordercloud: {
        marketplaceUrl: 'https://marketplace-middleware-test.azurewebsites.net',
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJhbm9uLXRlbXBsYXRlLXVzZXIiLCJjaWQiOiJlOTU1ZDZlYy01OWM4LTQ0NDItOTQ4ZS0xNmNjYzVmZDI3YWUiLCJvcmRlcmlkIjoiLTBZOTFCUWlIRVcyS2tBMTZzQ1BPUSIsInUiOiIxMDIwMjMwIiwidXNydHlwZSI6ImJ1eWVyIiwicm9sZSI6WyJNZUFkZHJlc3NBZG1pbiIsIk1lQWRtaW4iLCJNZUNyZWRpdENhcmRBZG1pbiIsIk1lWHBBZG1pbiIsIlNob3BwZXIiLCJTdXBwbGllclJlYWRlciIsIlN1cHBsaWVyQWRkcmVzc1JlYWRlciIsIlBhc3N3b3JkUmVzZXQiLCJCdXllclJlYWRlciJdLCJpc3MiOiJodHRwczovL2F1dGgub3JkZXJjbG91ZC5pbyIsImF1ZCI6Imh0dHBzOi8vYXBpLm9yZGVyY2xvdWQuaW8iLCJleHAiOjE1OTU0MzU1NzAsIm5iZiI6MTU5NDgzMDc3MH0._enaopgFpPFapqPauLbqpa_D6VgMzemnvCBu8tlq7Go'
      },
      content_css: [
        // 'https://piasstorageprod.azureedge.net/buyerweb/styles.07d24b25eb6a60350a70.css',
        'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css'
      ]
    }
  },
});