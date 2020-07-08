import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketplaceSDK, Asset } from 'marketplace-javascript-sdk';
import * as MarketplaceSdkInstance from 'marketplace-javascript-sdk';
import { OcTokenService } from '@ordercloud/angular-sdk';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cms-asset-update',
  templateUrl: './asset-update.component.html',
  styleUrls: ['./asset-update.component.scss']
})
export class AssetUpdateComponent implements OnInit {
  assetForm: FormGroup;

  @Input() asset?: Asset;
  @Input() assetType: any;
  @Input() isNew: boolean;
  @Output() onSubmit = new EventEmitter();
  @Output() onDelete = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    const formGroup = {
      Title: [this.asset ? this.asset.Title : null, Validators.required],
      Url: [this.asset ? this.asset.Url : null, null],
      Active: [this.asset ? this.asset.Active : false],
      ID: [this.asset ? this.asset.ID : null, null],
      Type: [this.asset ? this.asset.Type : this.assetType],
      FileName: [this.asset ? this.asset.FileName : null],
    };

    this.assetForm = this.formBuilder.group(formGroup);
  }

  uploadFile(event): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.assetForm.controls['Url'].setValue(e.target['result']);
    };
    reader.readAsDataURL(event.target.files[0]);
    this.assetForm.controls['FileName'].setValue(event.target.files[0].name);
  }

  formValid(): boolean {
    return this.assetForm.valid;
  }

  deleteAsset() {
    
  }

  saveChanges(asset) {
    let updatedAsset = asset.value;
    if (this.isNew) {
      return MarketplaceSDK.Upload.UploadAsset(updatedAsset).then(() => {
        this.isNew = false;
        this.onSubmit.emit({
          action: 'UploadAsset',
          asset: updatedAsset
        });
      })
    } else {
      return MarketplaceSDK.Assets.Update(updatedAsset.ID, updatedAsset).then(() => {
        this.onSubmit.emit({
          action: 'Update',
          asset: updatedAsset
        });
      })
    }
  }

}
