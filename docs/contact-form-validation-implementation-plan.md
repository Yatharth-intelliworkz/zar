# Contact Form Validation Implementation Plan

## Goal
Implement robust client-side validation for the Contact form using `react-hook-form`, including regex validation for text/email/message fields, proper ref handling for custom field components, `Controller` integration for `PhoneField`, inline error messages below each field, and server submission through a Next.js route handler.

## Scope
- Contact page form at `src/app/contact/page.tsx`
- Custom field atoms:
  - `InputField`
  - `PhoneField`
  - `SelectField`
  - `TextareaField`
- New API route handler for form submission:
  - `src/app/api/contact/route.ts`

## Implementation Steps

### 1. Add dependency
- Install `react-hook-form`.

### 2. Ref-safe form field components
Update custom atoms to support form library integration:
- Convert `InputField`, `SelectField`, and `TextareaField` to `forwardRef`.
- Ensure refs are attached to the native input/select/textarea.
- Add optional `errorMessage` prop and render message below field.
- Preserve existing API to avoid breaking other pages.

### 3. Controlled `PhoneField` for `Controller`
- Keep intl-tel-input initialization logic.
- Add controlled props support (`value`, `onChange`, `onBlur`).
- Use hidden input value sync and event bridge so RHF `Controller` receives updates.
- Add `errorMessage` rendering below field.

### 4. Convert contact form to RHF
- Make contact page a client component (`'use client'`).
- Use `useForm` with typed schema for fields:
  - `name`, `company`, `email`, `phone`, `subject`, `message`
- Use `register` for simple fields:
  - `InputField`, `SelectField`, `TextareaField`
- Use `Controller` for `PhoneField`.
- Add regex rules:
  - text fields: allow letters/numbers/basic punctuation with length constraints
  - email: strict email regex
  - message: content-safe regex + min/max length
- Show error message directly below each field via `errorMessage` prop.

### 5. Next.js route handler submission
- Add POST route at `src/app/api/contact/route.ts`.
- Validate required payload shape server-side.
- Return JSON success/error response.
- In client form submit handler:
  - call `/api/contact`
  - display submit status (sending/success/failure)
  - reset form on success

### 6. Styling for error state
- Add local styles in contact page/module or atom CSS for:
  - error message text
  - optional invalid border state
- Keep visual language aligned with current design system.

### 7. Validation checks
- Run TypeScript/error checks on modified files.
- Ensure no regressions in pages that reuse shared atoms.

## Deliverables
- Updated atom components with ref + error support.
- Contact form using `react-hook-form` + regex validation.
- Controller-based phone integration.
- Server route handler for submissions.
- Inline field-level error display.
