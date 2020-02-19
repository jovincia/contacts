import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { infosPage } from './infos.page';

describe('infosPage', () => {
  let component: infosPage;
  let fixture: ComponentFixture<infosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ infosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(infosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
