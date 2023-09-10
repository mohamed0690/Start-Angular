import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioItemComponent } from './portofolio-item.component';

describe('PortofolioItemComponent', () => {
  let component: PortofolioItemComponent;
  let fixture: ComponentFixture<PortofolioItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofolioItemComponent]
    });
    fixture = TestBed.createComponent(PortofolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
