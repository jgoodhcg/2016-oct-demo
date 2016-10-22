###todo 

####initial launch
- [ ] finish website
  - [x] favicon
  - [x] color scheme
  - [x] top bar
    - [x] icons link
    - [x] copy email
    - [x] icons
    - [x] fix expansion animation
  - [x] title card
    - [x] ellispis text over flow
    - [x] refactor collapse to use react render class
    - [x] bio
    - [x] experience
      - [x] skill ratings 
      - [x] back button
      - [x] skills that I want to use
       - [x] javascript, clojure, bash, sass, sql (languages)
       - [x] react, reagent, reframe, d3, snap, luminus (frameworks/libraries)
       - [x] node, lein, webpack, docker, vagrant, git, nginx, postgres (tools)
      - [x] employment
        - [x] onestop feb 2016 - present
          - [x] maintained & exteneded legacy e-commerce site and supporting applications
          - [x] php, python, javascript, bash, sql
          - [x] zend, jquery
          - [x] apache, mercurial, vagrant, potsgres
        - [x] city of wyoming may 2015 - nov 2015
         - [x] developed internal crud application for public works department
         - [x] php, javascript, sql, sass
         - [x] jquery
         - [x] IIS, git, microsoft sql server 08
      - [x] education
        - [x] GVSU B.S. CS and minor in Anthropology 2012 - 2015
        - [x] KCC general education and illustration 2011
        - [x] GRCC general education and film & video 2010 - 2011
  - [ ] activity card
    - [x] clicky color thing
      - [x] modularize it to take up containing div
        - [x] modular and in single div
        - [x] seperate route
        - [x] info + back button
    - [x] cut out icons
      - [x] clicky color thing
      - [x] time sheet visualizations (coming soon)
      - [x] myfitness pall visualizations (coming soon)
      - [x] workout visualizations (coming soon)
      - [x] federal government api interaction (coming soon)

####critiques to address
- [x] change title
- [x] ...an experiment ~with~~ **that uses** React, ...
- [x] sizing on projects
- [x] ~~link~~ buttton justin good to home
- [x] nix back buttons
- [x] drop the `the`, just _facebook_

####todo for mvp
- [x] move coming soon to desc page
  - [x] refactor activities to use activity component
- [ ] page for each desc of each activity/project
  - [x] timesheets
    - [x] old time sheet screenshots
    - [x] example data
    - [x] sketch of new visual
  - [ ] calories
    - [ ] export data sample
    - [ ] checklist
      - [ ] parse data to postgres
      - [ ] determine all food groupings
      - [ ] create icons for food groupings
      - [ ] d3 chart with time range
  - [ ] fitness
    - [ ] sample data spreadsheet
    - [ ] old bar graph
    - [ ] checklist
      - [ ] parse data to postgres
  - [ ] fed
    - [ ] play around with this api
    - [ ] list reps given zip code
  - [ ] timetracker
    - [ ] elevator pitch
    - [ ] stack
    - [ ] mock ups

####do Later
- [ ] progress bar component (very similar to skills comp)
- [ ] all activity cards should be focus-able w/ transition expansions (col-4 -> col-12)
- [ ] refactor
  - [ ] components into pages -> components
  - [ ] css into seperate files for each component (?put component's css with compnent?)
  - [ ] accesiblitity
    - [ ] links are links
    - [ ] alt text
    - [ ] use a screen reader, see how it feels
- [ ] delayed link(react route) with pre-animation
- [ ] local storage last visit for default collapse
- [ ] resources volume
- [ ] express server with server side routing
- [ ] Link button only clicks text
  - [ ] move card div inside Link component
- [ ] global footer instead of just on index page
- [ ] blog
  - [ ] inline svg (viewport relativity)
  - [ ] webpacking no images yet
  - [ ] docker volumes
  - [ ] css animations vs transitions vs fuck it
  - [ ] porting old code and when to refactor
- [ ] proper readme to launch
- [ ] make back buttons relative not absolute to "/"
- [ ] add shadows to project catalog icons
