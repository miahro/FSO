
## Ex 0.6 New Note SPA diagram

```mermaid

sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status code 201 / content created
    deactivate server
    
    Note right of browser: The browser renders the note list with added note. Whole HTML page is not reloaded from server, nor whole JSON object list is downloaded
```