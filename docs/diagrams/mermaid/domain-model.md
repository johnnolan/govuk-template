# Domain Model

```mermaid
---
title: Streamy Domain Model
---
classDiagram
    Title "1..*" -- "1..*" Genre: is associated with
    %% Added to make visibility better
    Title: \n\n
    %% Can be used to link a Domain Object to external documentation
    link Title "#" _blank

    Title "1..*" *-- "0..*" Season: has
    Title "1..*" *-- "0..*" Review: has
    Title "0..*" o-- "1..*" Actor: features

    TV Show --|> Title: implements
    Short --|> Title: implements
    Film --|> Title: implements

    Viewer "0..*" --> "0..*" Title: watches

    Season "1" *-- "0..*" Review: has
    Season "1" *-- "1..*" Episode: contains

    Episode "1" *-- "0..*" Review: has
```
