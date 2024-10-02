### io.vouch.data.ledger

___
<br/>

#### forbidden

An exception kind that occurs when the device sending the tx is not authorized
  to perform the operation.
___
<br/>

#### unauthorized

An exception kind that occurs when the platform does not recognize the signature
  produced by the User Device keys.

  Possible causes:
  - Wrong initialization of the SDK;
  - Potential client compromise;
  - Payload tampering.

  See also:
  [Exceptions Reference]()
___
<br/>

#### ->store-sms-verification-code-request*
<sup>Private</sup>

An invitation verification code
