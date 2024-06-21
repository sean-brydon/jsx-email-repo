export const ERRORS = {
  NONCE_REQUIRED: "Nonce header is required",
  SIGNATURE_REQUIRED: "Signature header is required",
  INVALID_SIGNATURE: "Invalid signature",
  DEPLOYMENT_NOT_FOUND_BY_CUSTOMER: "Deployment cannot be found for customer",
  THIS_KEY_EITHER_DOES_NOT_EXIST_OR_INVALID:
    "This key either does not exist or is not active",
} as const;
