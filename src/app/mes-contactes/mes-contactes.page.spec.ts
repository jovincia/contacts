import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesContactesPage } from './mes-contactes.page';

describe('MesContactesPage', () => {
  let component: MesContactesPage;
  let fixture: ComponentFixture<MesContactesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesContactesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesContactesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
