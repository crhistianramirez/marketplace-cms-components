import { Component, OnInit } from '@angular/core';
import { MarketplaceSDK } from 'marketplace-javascript-sdk';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cms-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class CmsAssetListComponent implements OnInit {
  assets: any;
  modalReference: NgbModalRef;
  assetTypes: string[] = ['Image', 'Theme', 'Attachment', 'Structured'];
  selectedTab: string = 'Image';

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.listAssets(this.assetTypes[0]);
  }

  listAssets(assetType: string) {
    return MarketplaceSDK.Assets.List({ filters: { Type: assetType } }).then(
      (assets) => {
        this.assets = assets;
      }
    );
  }

  handleUploadAssetModal(modalRef) {
    this.modalReference = this.modalService.open(modalRef, {size: 'lg'});
  }

  handleSubmit() {
    this.modalReference.close();
    this.listAssets(this.selectedTab);
  }

  onChangeTab(eventId): void {
    this.selectedTab = eventId;
    this.listAssets(this.selectedTab);
  }
}
