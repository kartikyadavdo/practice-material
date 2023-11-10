import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDialogComponent } from './crud-dialog.component';

describe('CrudDialogComponent', () => {
  let component: CrudDialogComponent;
  let fixture: ComponentFixture<CrudDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudDialogComponent]
    });
    fixture = TestBed.createComponent(CrudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
