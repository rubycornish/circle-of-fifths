(defproject circle-of-fifths "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]
                 [quil "2.6.0"]
                 [figwheel-sidecar "0.5.8"]
                 [com.cemerick/piggieback "0.2.1"]]
  :plugins [[lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.8"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {
              :builds [{:id "dev"             ; development configuration
                        :source-paths ["src"] ; Paths to monitor for build
                        :figwheel true        ; Enable Figwheel
                        :compiler {:main circle-of-fifths.core     ; your main namespace
                                   :asset-path "cljs/out"                       ; Where load-dependent files will go, mind you this one is relative
                                   :output-to "resources/public/cljs/main.js"   ; Where the main file will be built
                                   :output-dir "resources/public/cljs/out"      ; Directory for temporary files
                                   :source-map-timestamp true}}]}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]})
