### io.vouch.data.oidc

___
<br/>

#### invalid-aud

Aud stands for audience and this exception kind occurs when the claim in JWT token, during
  enroll-with-jwt operation, doesn't match the preconfigured expected value (e.g. OneApp).
___
<br/>

#### invalid-iss

Iss stands for issuer, i.e. who generated the JWT token and this exception kind
  can happen during the enroll-with-jwt operation when the claim doesn't match
  the preconfigured expected value.

  For example:
  - The environment variable OIDC_CONFIG might have the `:well-known-url` misconfigured;
  - A complitely different OIDC JWT token might have been provided.
___
<br/>

#### invalid-email

This exception kind happens when the string in email claim in JWT token, during
  enroll-with-jwt operation, doesn't conform to email format.
___
<br/>

#### invalid-jwt

This exception kind can happen during enroll-with-jwt operation.

  Possible causes:
  - The JWT cannot be parsed or the signature cannot be verified;
  - The JWT might have been altered.
