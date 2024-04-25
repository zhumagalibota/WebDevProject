import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportNicknameComponent } from './import-nickname.component';

describe('ImportNicknameComponent', () => {
  let component: ImportNicknameComponent;
  let fixture: ComponentFixture<ImportNicknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportNicknameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
