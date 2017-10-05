(ns ^:figwhee-no-load circle-of-fifths.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [circle-of-fifths.app :as app]))

(enable-console-print!)

(q/defsketch my
  :host "circle-of-fifths"
  :size [app/canvas-width app/canvas-height]
  :setup #'app/setup
  :update #'app/update-state
  :draw #'app/draw-state
  :mouse-clicked #'app/mouse-click
  :middleware [m/fun-mode])




