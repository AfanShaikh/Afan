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
