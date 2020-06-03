##TicketList

Create ticket 
``POST``
``/ticket/create``

Params:
- ``type: String``
- ``price: Number``
- ``duration: Number, number of minutes ticket is valid``

Get ticket
``GET``
``/ticket/details/:id``

URL params:
- ``id: String``

Delete ticket
``DELETE``
``/ticket/delete/:id``

URL params:
- ``id: String``

Get all tickets
``Get``
``/ticket/all``



##TicketList instance

Create ticket instance
``POST``
``/ticket-instance/create``

Params:
- ``user_id: String, must be id of existing user``
- ``ticket_id: String, must be id of existing ticket``
- ``number_of_tickets: String, (Number) don't break it``
- ``destination: String, validate string with google maps search``