import Phaser from "phaser";
import { sharedData } from "../data/sharedData";

export default class Laser extends Phaser.Physics.Arcade.Sprite {
  speed: number;
  direction: number=0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
   let rockect='bluerocket'
   if(sharedData.plane==='pinkjet'){
    rockect='pinkrocket'
   }
    super(scene, x, y, rockect);

    this.speed = Phaser.Math.GetSpeed(1000, 1);
    this.setScale(0.2);
  }

  // fire method should take x, y, and direction as arguments
  fire(x: number, y: number, direction: number): void {
    this.setPosition(x, y);
    this.setActive(true);
    this.setVisible(true);

    this.direction = direction;
    this.rotation = this.direction;
  }

  // update method should take time and delta as arguments
  update(time: number, delta: number): void {
    this.x += Math.cos(this.direction) * this.speed * delta;
    this.y += Math.sin(this.direction) * this.speed * delta;

    // Check if laser is out of bounds and deactivate it
    if (this.x < -50 || this.y < -50 || this.x > 1000 || this.y > 600) {
      this.setActive(false);
      this.setVisible(false);
      this.destroy();
    }
  }
}
