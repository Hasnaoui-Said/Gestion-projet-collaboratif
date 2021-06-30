import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent implements OnInit {
  responses: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialog,
              ) {
    this.responses = data.responses;
  }

  ngOnInit(): void {
    console.log('PopupDialogComponent ' + this.responses);
  }
  closeDialog(){
    this.dialogRef.closeAll();
  }
}
