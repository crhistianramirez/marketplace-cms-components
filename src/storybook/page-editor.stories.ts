import { moduleMetadata } from '@storybook/angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { HtmlEditorComponent } from 'src/app/components/html-editor/html-editor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionPickerComponent } from 'src/app/components/section-picker/section-picker.component';
import { CarouselEditorComponent } from 'src/app/components/carousel-editor/carousel-editor.component';
import { SectionDateSettingsComponent } from 'src/app/components/section-date-settings/section-date-settings.component';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';
import { SectionTemplateRendererComponent } from 'src/app/components/section-template-renderer/section-template-renderer.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditorComponent } from 'src/app/components/page-editor/page-editor.component';

export default {
  title: 'Page Editor',
  component: PageEditorComponent,
  parameters: {
    component: PageEditorComponent
  },
  decorators: [
    moduleMetadata({
      declarations: [
        PageEditorComponent,
        HtmlEditorComponent,
        SectionPickerComponent, 
        CarouselEditorComponent,
        SectionDateSettingsComponent,
        ConfirmModalComponent,
        SectionTemplateRendererComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        EditorModule, 
        NgbModule
      ],
      providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: './plugin/dist/plugin.min.js' }
      ],
      entryComponents: [
        SectionPickerComponent, 
        CarouselEditorComponent,
        SectionDateSettingsComponent,
        ConfirmModalComponent
      ]
    })
  ]
};

export const FullExample = () => ({
  component: PageEditorComponent,
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
</div>
`,
  props: {
    ocToken: '',
    editorOptions: {
      ordercloud: {
        marketplaceUrl: 'https://marketplace-middleware-test.azurewebsites.net',
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJhbm9uLXRlbXBsYXRlLXVzZXIiLCJjaWQiOiJlOTU1ZDZlYy01OWM4LTQ0NDItOTQ4ZS0xNmNjYzVmZDI3YWUiLCJvcmRlcmlkIjoiWTR5SzNwdUl1MGE3Qk5CV2pjWEVMQSIsInUiOiIxMDIwMjMwIiwidXNydHlwZSI6ImJ1eWVyIiwicm9sZSI6WyJNZUFkZHJlc3NBZG1pbiIsIk1lQWRtaW4iLCJNZUNyZWRpdENhcmRBZG1pbiIsIk1lWHBBZG1pbiIsIlNob3BwZXIiLCJTdXBwbGllclJlYWRlciIsIlN1cHBsaWVyQWRkcmVzc1JlYWRlciIsIlBhc3N3b3JkUmVzZXQiLCJCdXllclJlYWRlciJdLCJpc3MiOiJodHRwczovL2F1dGgub3JkZXJjbG91ZC5pbyIsImF1ZCI6Imh0dHBzOi8vYXBpLm9yZGVyY2xvdWQuaW8iLCJleHAiOjE1OTQ4NDUxNTksIm5iZiI6MTU5NDI0MDM1OX0.lpQBQAYqlssXmxtcHLxck5N6CGxr31ZA71SUqyxxLJE'
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