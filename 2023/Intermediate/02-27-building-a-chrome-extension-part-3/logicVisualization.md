+----------------------------------------------------------+
|                                                          |
|                      manifest.json                       |
|                                                          |
|   +----------------+                                     |
|   | Define the     |                                     |
|   | extension's    |                                     |
|   | permissions,   |                                     |
|   | content scripts|                                     |
|   | and icons      |                                     |
|   +----------------+                                     |
|              |                                           |
|              v                                           |
|                                                          |
|   +---------------------------------------------------+  |
|   |                                                   |  |
|   |                  background.js                    |  |
|   |                                                   |  |
|   |  +----------------+        +-----------------+    |  |
|   |  |  Receive a      |        | Send a message  |   |  |
|   |  |  message from a |        | to a content    |   |  |
|   |  |  contentScript  |        | script          |   |  |
|   |  +----------------+        +-----------------+    |  |
|   |            |                             |        |  |
|   |            v                             v        |  |
|   |                                                   |  |
|   |   +----------------------------------------+      |  |
|   |   |                                        |      |  |
|   |   |             contentScript.js           |      |  | 
|   |   |                                        |      |  |
|   |   |   +---------------------------+        |      |  |
|   |   |   |  Receive message from      |       |      |  |
|   |   |   |        background.js       |       |      |  |
|   |   |   +---------------------------+        |      |  |
|   |   |                     |                  |      |  |
|   |   |                     v                  |      |  |
|   |   |                                        |      |  |
|   |   |        +------------------------+      |      |  |
|   |   |        |                        |      |      |  |
|   |   |        |  Perform action based  |      |      |  |
|   |   |        |     on the message     |      |      |  |
|   |   |        |                        |      |      |  |
|   |   |        +------------------------+      |      |  |
|   |   |                                        |      |  |
|   |   +----------------------------------------+      |  |
|   |                                                   |  |
|   +---------------------------------------------------+  |
|                                                          |
|                      popup.html                          |
|   +-----------------+                         +--------+ |
|   |                 |                         |        | |
|   |  Display the    |                         | Send a | |
|   |  user interface |                         | message| |
|   |  for the popup  |                         | to     | |
|   |                 |                         | content| |
|   +-----------------+                         +--------+ |
|              |                                           |
|              v                                           |
|                      popup.js                            |
|   +-----------------+                         +--------+ |
|   |                 |                         |        | |
|   |   Send a message|                         | Update | |
|   |   to background |                         | the UI | |
|   |   script        |                         | of the | |
|   |                 |                         | popup  | |
|   +-----------------+                         +--------+ |
|                                                          |
|                      newTab.html                         |
|   +-----------------+                         +--------+ |
|   |                 |                         |        | |
|   |  Display the    |                         | Send a | |
|   |  user interface |                         | message| |
|   |  for the new tab|                         | to     | |
|   |                 |                         | content| |
|  +-----------------+                          +--------+ |
|              |                                           |
|              v                                           |
|                      newTab.js                           |
|   +-----------------+                         +--------+ |
|   |                 |                         |        | |
|   |   Send a message|                         | Update | |
|   |   to background |                         | the UI | |
|   |   script        |                         | of the | |
|   |                 |                         | new tab| |
|   +-----------------+                         +--------+ |
|                                                          |
|                       option.html                        |
|   +-----------------+                         +--------+ |
|   |                 |                         |        | |
|   |  Display the    |                         | Send a | |
|   |  user interface |                         | message| |
|   |  for the option |                         | to     | |
|   |                 |                         | content| |
|   +-----------------+                         +--------+ |
|              |                                           |
|              v                                           |
|                      option.js                           |
|   +-----------------+                         +--------+ |
|   |                 |                         |        | |
|   |   Send a message|                         | Update | |
|   |   to background |                         | the UI | |
|   |   script        |                         | of the | |
|   |                 |                         | option | |
|   +-----------------+                         +--------+ |
+----------------------------------------------------------+
