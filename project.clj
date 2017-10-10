(defproject circle-of-fifths "0.1.0-SNAPSHOT"
  :description "Circle of fifths app"
  :url "mattrosewood.com/circle-of-fifths"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [quil "2.6.0"]
                 [com.rpl/specter "1.0.3"]
                 [figwheel-sidecar "0.5.14"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [com.cemerick/piggieback "0.2.2"]]
  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]
            [lein-figwheel "0.5.14"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {
              :builds [{:id "dev"               ; development configuration
                        :source-paths ["src/"]  ; Paths to monitor for build
                        :figwheel true          ; Enable Figwheel
                        :compiler {:main circle-of-fifths.core                  ; your main namespace
                                   :asset-path "cljs/out"                       ; Where load-dependent files will go, mind you this one is relative
                                   :output-to "resources/public/cljs/main.js"   ; Where the main file will be built
                                   :output-dir "resources/public/cljs/out"      ; Directory for temporary files
                                   :source-map-timestamp true}}

                       {:id "min"               ; development configuration
                        :source-paths ["src/"]  ; Paths to monitor for build
                        :jar true
                        :compiler {:main circle-of-fifths.core                  ; your main namespace
                                   :asset-path "cljs/out"                       ; Where load-dependent files will go, mind you this one is relative
                                   :output-to "resources/public/cljs/main.js"   ; Where the main file will be built
                                   :output-dir "resources/public/cljs/min-out"      ; Directory for temporary files
                                   :source-map-timestamp true
                                   :optimizations :advanced
                                   :pretty-print false}}]}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]})
