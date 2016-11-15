import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

interface LightBoxState {
  toggle: boolean;
  imageList: LightBoxImage[];
  selected: number;
}

@Injectable()
export class LightBoxService {

  toggle: boolean;
  imageList;
  selected: number;

  state: Subject<LightBoxState> = new Subject<LightBoxState>();

  constructor() {
    this.initialize();
  }

  initialize() {
    this.toggle = false;
    this.selected = 0;
    this.imageList = [];
    this.updateState();
  }

  show(i){
    this.toggle = true;
    this.selected = i;
    this.updateState();
  }

  close(){
    this.toggle = false;
    this.updateState();
  }

  setImages(images: LightBoxImage[]){
    this.imageList = images;
    this.updateState();
  }

  updateState(){
    this.state.next({
      toggle:  this.toggle,
      selected: this.selected,
      imageList: this.imageList
    });
  }

}

export class LightBoxImage{
  constructor(public src: string, public thumbnail:string){

  }
}
