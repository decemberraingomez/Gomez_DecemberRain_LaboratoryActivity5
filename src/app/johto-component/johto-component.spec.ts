import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { JohtoComponent } from './johto-component';

describe('JohtoComponent', () => {
  let component: JohtoComponent;
  let fixture: ComponentFixture<JohtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
