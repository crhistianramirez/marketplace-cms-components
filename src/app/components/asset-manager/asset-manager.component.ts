import { Component, OnInit, Input, Output } from '@angular/core';
import { MarketplaceSDK } from 'marketplace-javascript-sdk';
import * as MarketplaceSdkInstance from 'marketplace-javascript-sdk';
import { OcTokenService } from '@ordercloud/angular-sdk';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'cms-asset-manager',
  templateUrl: './asset-manager.component.html',
  styleUrls: ['./asset-manager.component.scss']
})
export class AssetManagerComponent implements OnInit {
  assets: any = {
    Meta: {},
    Items: [],
  };
  assetTypes: string[] = ['Image', 'Theme', 'Attachment', 'Structured'];
  assetForms: FormGroup;
  isNew: boolean = false;
  selectedTab: string = 'Image';
  @Output() onSubmit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.listAssets(this.assetTypes[0]);
  }

  listAssets(assetType: string) {
    return MarketplaceSDK.Assets.List({ filters: { Type: assetType } }).then(
      (assets) => {
        this.assets = assets;
        this.setForms();
      }
    );
  }

  setForms() {
    let assetFormGroup = [];
    this.assets.Items.forEach((asset) => {
      const formGroup = this.formBuilder.group({
        Title: [asset.Title, Validators.required],
        Url: [asset.Url, null],
        Active: [asset.Active],
        ID: [asset.ID, null],
        Type: [asset.Type],
        FileName: [asset.FileName],
      });
      assetFormGroup = [...assetFormGroup, formGroup];
    });
    this.assetForms = this.formBuilder.group({
      Assets: this.formBuilder.array(assetFormGroup),
    });
  }

  addAssetForm() {
    const newFormGroup = this.formBuilder.group({
      Title: [null, Validators.required],
      Url: [null, null],
      Active: [false],
      ID: [null, Validators.required],
      Type: [this.selectedTab],
      FileName: [null],
    });
    this.assetForms.controls['Assets']['controls'].unshift(newFormGroup);
    this.isNew = true;
  }

  addImage(event, index) {
    const targetForm = this.assetForms.controls['Assets']['controls'][index];
    const reader = new FileReader();
    reader.onload = (e) => {
      targetForm.controls['Url'].setValue(e.target['result']);
    };
    reader.readAsDataURL(event.target.files[0]);
    targetForm.controls['FileName'].setValue(event.target.files[0].name);
  }

  formValid(): boolean {
    return !this.assetForms.pristine && this.assetForms.valid;
  }

}
