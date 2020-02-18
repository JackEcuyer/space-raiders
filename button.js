class Button {
  constructor(text, x, y, w, h, click) {
    this.x = x
    this.y = y
    this.text = text
    this.width = w
    this.height = h
    this.click = click
    this.enabled = true
  }
  clicked() {
    if (this.enabled) {
      if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 && mouseY > this.y - this.height / 2 && mouseY < this.y
        + this.height / 2) {
        // button is touched
        this.click()
      }
    }
  }
  render() {
    rectMode(CENTER)
    textAlign(CENTER)
    fill(0)
    stroke(255)
    rect(this.x, this.y, this.width, this.height)
    noFill()
    textSize(30)
    text(this.text, this.x, this.y + 10)
  }
}
