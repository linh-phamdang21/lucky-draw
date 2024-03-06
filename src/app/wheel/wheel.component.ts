import {Component, ElementRef, OnInit, ViewChild, Input, AfterViewInit, DoCheck, Output, EventEmitter} from '@angular/core';
import {DataService} from '../data.service';

const COLORS = ['#f82', '#0bf', '#fb0', '#0fb', '#b0f', '#f0b', '#bf0'];

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild('wheel') wheel: ElementRef<HTMLCanvasElement>;
  @ViewChild(' spin') spin: ElementRef;
  colors = ['#f82', '#0bf', '#fb0', '#0fb', '#b0f', '#f0b', '#bf0'];
  sectors: any[] = [];
  tot: any;
  ctx: any;
  dia: any;
  rad: any;
  PI: any;
  TAU: any;
  arc0: any;
  winners: any = [];
  modeDelete: any = true;
  friction: any = 0.995; // 0.995=soft, 0.99=mid, 0.98=hard
  angVel: any = 0; // Angular velocity
  ang: any = 0; // Angle in radians
  lastSelection: any;
  rand = (m, M) => Math.random() * (M - m) + m;

  @Input() set options(values: string[]) {
    console.log('Values', values);
    this.sectors = values.map((opts, i) => {
      return {
        color: COLORS[(i >= COLORS.length ? i + 1 : i) % COLORS.length],
        label: opts
      };
    });

    console.log(this.sectors);
    if (this.wheel) {
      this.createWheel();
    }
  }

  @Output() result: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dataService: DataService) {
  }

  ngDoCheck(): void {
    this.engine();
  }

  ngOnInit() {
    // Initial rotation
    // Start engine
  }

  ngAfterViewInit(): void {
    this.createWheel();
  }

  createWheel() {
    this.ctx = this.wheel.nativeElement.getContext('2d');
    this.dia = this.ctx.canvas.width;
    this.tot = this.sectors.length;
    this.rad = this.dia / 2;
    this.PI = Math.PI;
    this.TAU = 2 * this.PI;

    this.arc0 = this.TAU / this.sectors.length;
    if (this.sectors.length > 1) {
      this.sectors.forEach((sector, i) => this.drawSector(sector, i));
      this.rotate(true);
      this.winners = this.dataService.winnersSource.getValue();
      console.log('winners: ', this.winners);
      this.result.emit(this.winners);
    } else {
      this.sectors.forEach((sector, i) => this.drawSector(sector, i));
      this.rotate(true);
      this.winners = [this.sectors[0].label];
      this.result.emit(this.winners);
    }
    setTimeout(() => {
      this.restartWinner();
    }, 2000);
  }

  hasWinner() {
    return this.winners && this.winners.length > 0;
  }

  spinner() {
    if (!this.angVel) {
      this.angVel = this.rand(0.25, 0.35);
      this.result.emit(null);
    }
  }

  getIndex = () => {
    return Math.floor(this.tot - (this.ang / this.TAU) * this.tot) % this.tot;
  }

  drawSector(sector, i) {
    const ang = this.arc0 * i;
    this.ctx.save();
    // COLOR
    this.ctx.beginPath();
    this.ctx.fillStyle = sector.color;
    this.ctx.moveTo(this.rad, this.rad);

    this.ctx.arc(this.rad, this.rad, this.rad, ang, ang + this.arc0);
    this.ctx.lineTo(this.rad, this.rad);
    this.ctx.fill();
    // TEXT
    this.ctx.translate(this.rad, this.rad);
    this.ctx.rotate(ang + this.arc0 / 2);
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 25px sans-serif';
    this.ctx.fillText(sector.label, this.rad - 10, 10);
    //
    this.ctx.restore();
  }

  rotate(first = false) {
    const sector = this.sectors[this.getIndex()];
    this.ctx.canvas.style.transform = `rotate(${this.ang - this.PI / 2}rad)`;
    this.spin.nativeElement.textContent = !this.angVel ? 'spin' : sector.label;
    if (!first) {
      this.lastSelection = !this.angVel ? this.lastSelection : this.getIndex();
      this.deleteOption();
    }
    this.spin.nativeElement.style.background = sector.color;
  }

  frame() {
    if (!this.angVel) {
      return;
    }

    this.angVel *= this.friction; // Decrement velocity by friction
    if (this.angVel < 0.002) {
      this.angVel = 0;
    } // Bring to stop
    this.ang += this.angVel; // Update angle
    this.ang %= this.TAU; // Normalize angle
    this.rotate();
  }

  engine() {
    requestAnimationFrame(this.frame.bind(this));
  }

  deleteOption() {
    if (this.modeDelete && !this.angVel) {
      console.log('eliminar', this.lastSelection);
      this.addNewWinner(this.sectors[this.lastSelection].label);
      this.spin.nativeElement.textContent = this.sectors[
        this.lastSelection
        ].label;
      this.sectors.splice(this.lastSelection, 1);
      console.log('aaaaa: ', this.sectors);
      setTimeout(() => {
        this.createWheel();
      }, 800);
    }
  }

  restartWinner() {
    this.dataService.restartWinners();
  }

  addNewWinner(value) {
    this.dataService.addWinner(value);
  }

}
