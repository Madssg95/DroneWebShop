import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public natureModalOptions: Materialize.ModalOptions = {
    ready: () => { this.playVideo(); },
    complete: () => { this.pause(); }
  };
  private player: YT.Player;
  constructor() { }

  ngOnInit() {
  }

  saveNature(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pause() {
    this.player.pauseVideo();
  }
}
