### io.vouch.data.ledger.complete-task-tx

___
<br/>

#### missing-task-id

Exception kind thrown in case SDK fails in its validation process
  and sends the request to dk-api with empty/null asset-persona-task/id
  or dk-api fails in sending correct asset-persona-task/id to dk-abci.

  See also:
  [Exceptions Reference]()
___
<br/>

#### asset-not-found

This exception kind is not expected to happen, it can happen if the
  associated asset was not created for some reason.

  See also:
  [Exceptions Reference]()
___
<br/>

#### asset-device-not-found

This exception kind is not expected to happen, it can happen if the
  associated asset-device was not created for some reason.

  See also:
  [Exceptions Reference]()
___
<br/>

#### persona-not-found

This exception kind is not expected to happen, it can happen if the
  associated persona does not get created for some reason.

  See also:
  [Exceptions Reference]()
___
<br/>

#### persona-revoked

Exception kind thrown if the referenced persona has the status "revoked".

  Possible scenario:
  0. Given that an Owner has Digital Key already setup over a VIN
  0. And the Owner has shared Digital Key with Friend for VIN
  0. And Friend receives the Key Share pop-up
  0. But Friend doesn't accept or reject it
  0. And Owner revokes key share to Friend over VIN
  0. When Friend doesn't call sync and tries to accept or reject the key
  0. Then the app returns "400 - Persona revoked(kind: persona-revoked)" error

  See also:
  [Exceptions Reference]()
___
<br/>

#### task-not-found

This exception kind is not expected to happen, it can happen if the SDK is
  forced to send an arbitrary asset-persona-task/id.

  See also:
  [Exceptions Reference]()
___
<br/>

#### workflow-not-found

This exception kind is not expected to happen, it can happen if the workflow
  type isn't specified or the SDK is forced to provide an arbitrary value.

  See also:
  [Exceptions Reference]()
___
<br/>

#### task-already-completed

Exception kind thrown if key share was already handled by accepting or rejecting it.

  Possible scenario:
  0. Given that an Owner has Digital Key already setup over a VIN
  0. And the Owner has shared Digital Key with Friend for VIN
  0. And Friend receives the invite and accepts it
  0. When Friend tries to accept or reject the same invite again
  0. Then the app returns "400 - kind: task-already-completed" error.

  See also:
  [Exceptions Reference]()
