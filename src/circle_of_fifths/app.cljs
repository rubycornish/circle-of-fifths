(ns circle-of-fifths.app
  (:require [quil.core :as q :include-macros true]))

;; UTILITY

;;;; Screen

(def canvas-width 1600)
(def canvas-height 900)


;;;; Maths

(defn parametric-x [x r a]
  "Calculate the x coord of a point on a circle"
  (+ x (* r (q/cos (q/radians a)))))

(defn parametric-y [y r a]
  "Calculate the y coord of a point on a circle"
  (+ y (* r (q/sin (q/radians a)))))

(defn square [x]
  (* x x))

(def sqrt (.-sqrt js/Math))
(def asin (.-asin js/Math))
(def round (.-round js/Math))

(defn distance-from-center [x y px py]
  "Calculate distance of point px py from x y"
  (sqrt (+ (square (- px x)) (square (- py y)))))

;;;; Strings

(def chromatic-notes (cycle ["A" "Bb" "B" "C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab"]))

;

;;;; Intervals

(defn interval [semitones note]
  "Returns a note a number of semitones away from the given note going up the scale"
  (first (drop semitones (drop-while #(not= note %) chromatic-notes))))

(defn min-second [n]
  (interval 1 n))

(defn maj-second [n]
  (interval 2 n))

(defn maj-third [n]
  (interval 4 n))

(defn fourth [n]
  (interval 5 n))

(defn tritone [n]
  (interval 6 n))

(defn fifth [n]
  (interval 7 n))

(defn octave [n]
  (interval 12 n))


;;;; Structures

(def ionian [0 1 2 3 4 5 11])


;; SETUP

(defn setup []
  "Sets everything up"
  (q/frame-rate 30)
  (q/color-mode :rgb)
  {:tonic "C"
   :x-center-of-circle (/ canvas-width 2)
   :y-center-of-circle (/ canvas-height 2)
   :circle-radius (/ (* canvas-height 0.5) 2)
   :additional-info "chords"
   :structure ionian})

;; UPDATE

(comment
  (defn check-mouse-click-location [x y whole-d note-d]
    (let [m-x (q/mouse-x)
          m-y (q/mouse-y)]
      (cond
        ()))))

(defn angle-of-click [x y mx my min-r max-r]
  (let [r (distance-from-center x y mx my)]
    (cond
      (< r min-r) nil
      (> r max-r) nil
      :else (asin (/ (- y my) r)))))

(defn work-out-interval [angle]
  (- (/ (+ 90 angle) 30) 0.5)) ;;; TODO

(defn mouse-click [state event]
  (let [{tonic :tonic
         x :x-center-of-circle
         y :y-center-of-circle
         r :circle-radius
         info :additional-info
         structure :structure} state
        {mx :x
         my :y} event
        angle (angle-of-click x y mx my (* r 0.8) (* r 1.2))
        interval (work-out-interval angle)]
    (js/console.log angle)
    state))

;

(defn update-state [state]
  "Updates everything"
  (let [{x :x-center-of-circle
         y :y-center-of-circle
         r :circle-radius
         info :additional-info
         structure :structure} state]
    state))


;; DRAW


(defn draw-text [x y r a t]
  "Draw some text on a circle x y r moved by angle a"
  (let [x (parametric-x x r a)
        y (parametric-y y r a)]
    (q/with-translation [x y]
      (q/text t 0 0))))

(defn draw-dot [x y r a]
  "Draw a dot on a circle x y r moved by angle a"
  (let [x (parametric-x x r a)
        y (parametric-y y r a)]
    (q/ellipse x y 10 10)))

(defn draw-line [x y r a1 a2]
  "Draw a line on a circle x y r between points at angles a1 and a2"
  (let [x1 (parametric-x x r a1)
        y1 (parametric-y y r a1)
        x2 (parametric-x x r a2)
        y2 (parametric-y y r a2)]
    (q/line x1 y1 x2 y2)))

(defn draw-triangle [x y r a1 a2 a3]
  "Draw a line on a circle x y r between points at angles a1 and a2"
  (let [x1 (parametric-x x r a1)
        y1 (parametric-y y r a1)
        x2 (parametric-x x r a2)
        y2 (parametric-y y r a2)]
    (q/triangle x1 y1 x2 y2 x y)))

(defn draw-text-around-circle [x y r text text-size]
  "Draw given text around a circle"
  (let [angle (/ 360 (count text))
        angles (range -90 271 angle)]
    (q/text-font "sans-serif" text-size)
    (q/text-align :center :center)
    (dorun (map (partial draw-text x y r) angles text))))

(defn draw-dots-around-circle [x y r n]
  "Draw number of dots distributed around a circle."
  (let [angle (/ 360 n)
        angles (range -90 271 angle)]
    (dorun (map (partial draw-dot x y r) angles))))

(defn draw-lines-on-circle [x y r structure]
  (let [beg-angles (map #(- (* 30 %) 90) structure) 
        end-angles (map #(- (* 30 %) 90) (cons (peek structure) (pop structure)))]
    (dorun (map (partial draw-line x y r) beg-angles end-angles))))

(defn draw-triangles-on-circle [x y r structure]
  (let [beg-angles (map #(- (* 30 %) 90) structure) 
        end-angles (map #(- (* 30 %) 90) (cons (peek structure) (pop structure)))]
    (dorun (map (partial draw-triangle x y r) beg-angles end-angles))))

(defn draw-circle-of-fifths [x y r tonic]
  "Draw circle of fifths"
  (let [notes (take 12 (iterate fifth tonic))]
    (q/stroke-weight 2)
    (q/fill 0 0 0)
    (draw-dots-around-circle x y (* r 0.8) 12)
    (draw-text-around-circle x y r notes 50)))

(defn draw-major-chords [x y r]
  (let [chords ["I" "V" "ii" "vi" "iii" "vii°" "" "" "" "" "" "IV"]]
    (draw-text-around-circle x y r chords 30)))

(defn draw-additional-info [x y r info]
  (case info
    "chords" (draw-major-chords x y r )))

(defn draw-structure [x y r structure]
    (q/fill 200 200 200)
    (q/stroke 200 200 200)
    (draw-triangles-on-circle x y (* r 0.8) structure)
    (q/stroke 0 0 0)
    (draw-lines-on-circle x y (* r 0.8) structure))

(defn draw-state [state]
  "Draws everything"
  (let [{tonic :tonic
         x :x-center-of-circle
         y :y-center-of-circle
         r :circle-radius
         info :additional-info
         structure :structure} state]
    (q/background 240)
    (draw-structure x y r structure)
    (draw-circle-of-fifths x y r tonic)
    (draw-additional-info x y (* r 1.25) info)))

