# CSS `Notes`

### Contant-Box Vs Border-Box

| Property          | `content-box`                                | `border-box`                                  |
| ----------------- | -------------------------------------------- | --------------------------------------------- |
| `width`           | **200px is only the content**                | **200px includes content + padding + border** |
| Actual total size | 200 + 40 (padding) + 20 (border) = **260px** | Total size stays exactly **200px**            |
| Used for          | More control over content area               | Easier layout control                         |

🧒 **Student-friendly Analogy:**

- _**Content-box**_ = You buy a bag that is 200px wide, and then put the padding and border on the outside of it — it becomes larger than 200px.

- **_Border-box_** = You buy a bag that is exactly 200px wide, and padding + border are fit inside the same 200px.

<img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*08DnApeCVZ9QwaxgOrzGkA.jpeg' alt='box-siging' />

### Border-Box

```css
.box-2 {
  width: 100px;
  height: 120px;
  padding: 5px;
  border: 2px solid blue;
  box-sizing: border-box;
}
```

<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*6bkwYO_x4podYrSpmHVSvw.png' alt='border-box' />

### Content-Box

```css
.box-1 {
  width: 100px;
  height: 120px;
  padding: 5px;
  border: 2px solid blue;
  box-sizing: content-box;
}
```

<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*dip8l678B6Md1ihJ8Yfxig.png' alt='border-box' />

## Animation 🎨 CSS `animation-timing-function` Visual Guide

## 🎯 Goal

To **control the speed curve** of your animation over its duration.

> 🕒 Analogy: Think of animation like a car driving from point A to B in 1 second.

---

## 1. `linear`

📈 **Speed: Constant**

```
A ---------------- B
```

The car moves **at the same speed** throughout the entire distance.  
✔ Best for loading bars or smooth transitions without acceleration.

---

## 2. `ease`

⚡ **Speed: Starts slow → speeds up → slows down**

```
A ~~~---===---~~~ B
```

The car **accelerates**, goes fast in the middle, then **slows down** at the end.  
✔ Most **natural-looking** animation.  
💡 Default value.

---

## 3. `ease-in`

🚀 **Speed: Starts slow → speeds up**

```
A ~~~-----====== B
```

The car **starts slowly** and **accelerates** toward the end.  
✔ Good for elements **entering** the screen.

---

## 4. `ease-out`

🛑 **Speed: Starts fast → slows down**

```
A =====-----~~~ B
```

The car **starts fast** and **slows** before stopping.  
✔ Good for elements **exiting** or **fading out**.

---

## 5. `ease-in-out`

🌀 **Speed: Starts slow → speeds up → slows down**

```
A ~~~---=====---~~~ B
```

A mix of `ease-in` and `ease-out`.  
✔ Smooth for **both entrance and exit**.

---

## 6. `cubic-bezier(x1, y1, x2, y2)`

🔧 **Custom curve**

Use this when you want **complete control** over how the animation behaves.

For example:

```css
animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
```

This creates a **"bounce" or elastic** type effect.

---

## 🖼 Summary Table

| Timing Function | Speed Curve Shape       | Feel                 |
| --------------- | ----------------------- | -------------------- |
| `linear`        | Straight diagonal       | Constant speed       |
| `ease`          | S-curve                 | Natural, default     |
| `ease-in`       | Starts slow, speeds up  | Entrance emphasis    |
| `ease-out`      | Starts fast, slows down | Exit emphasis        |
| `ease-in-out`   | Slow → fast → slow      | Smooth start and end |
## Postion Topic

# `Position: static`(_default_)

- This is the default position.
- The element follows the normal document flow.
- It does not respond to `top`, `left`, `right`, or `bottom`.

```js
let arr = [1, 2, 3];
```

```html
<div class="box static">Static Position</div>

<style>
  .box {
    width: 200px;
    height: 100px;
    background: lightblue;
    border: 2px solid blue;
    margin: 10px;
  }
</style>
```

# `Position: relative`

- The element stays in the normal document flow.
- You can move it using `top`, `left`, `right`, `bottom` relative to its normal position.

```html
<div class="box relative">Relative Position</div>

<style>
  .relative {
    position: relative;
    top: 20px;
    left: 30px;
    background: lightcoral;
  }
</style>
```

# `Position: absolute`

- The element is removed from the normal document flow.
- It is positioned relative to the nearest positioned ancestor (if none, it positions itself relative to `<html>`).
- Uses `top`, `left`, `right`, `bottom` to move.

```html
<div class="container">
  <div class="box absolute">Absolute Position</div>
</div>

<style>
  .container {
    position: relative; /* Makes this the reference for absolute child */
    width: 300px;
    height: 200px;
    background: lightgray;
  }
  .absolute {
    position: absolute;
    top: 50px;
    left: 50px;
    background: yellow;
  }
</style>
```

# `Position: fixed`

- The element is removed from the document flow.
- It is positioned relative to the viewport (screen).
- It stays in place even when scrolling.

```html
<div class="box fixed">Fixed Position</div>

<style>
  .fixed {
    position: fixed;
    top: 10px;
    right: 10px;
    background: lightgreen;
  }
</style>
```

# `Position: sticky`

- Acts like relative until you scroll past it, then it behaves like fixed.
- Requires `top`, `left`, `right`, or `bottom` to work.

```html
<div class="box sticky">Sticky Position</div>
<p>Scroll down to see the effect...</p>
<div style="height: 1000px;"></div>

<style>
  .sticky {
    position: sticky;
    top: 0;
    background: orange;
    padding: 10px;
  }
</style>
```