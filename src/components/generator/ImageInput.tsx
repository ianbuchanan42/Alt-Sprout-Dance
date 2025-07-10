import '../../styles/generator/ImageInput.scss';
// import maggieImage from '../assets/maggie-carey.png';
import ImageUpload from './ImageUpload';
import ImageUrl from './ImageUrl';
import PreviewImage from './PreviewImage';
import ToggleImageInputType from './ToggleImageInput';
import { useState } from 'react';
// import SliderRange from './sliderRange';

const ImageInput = () => {
  const [isTypeUrl, setIsTypeUrl] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [imageUploading, setImageUploading] = useState(false);

  // might want to create event handlers that are declared in parent (here) instead of in components?

  return (
    <section className='image-input'>
      {isTypeUrl ? (
        <ImageUrl setImageUrl={setImageUrl} />
      ) : (
        <ImageUpload
          setImageUrl={setImageUrl}
          setImageUploading={setImageUploading}
        />
      )}
      <ToggleImageInputType setIsTypeUrl={setIsTypeUrl} isTypeUrl={isTypeUrl} />
      {/* <!-- Preview Image --> */}
      {imageUploading && <span className='loader'></span>}

      <PreviewImage src={imageUrl} />

      {/* add is Uploading... element and logic? */}
    </section>
  );
};

export default ImageInput;

/**
 * ComponentPropsWithoutRef<'input'> Usage Notes
 *
 * • What it is
 *   – A React utility type: `ComponentPropsWithoutRef<'input'>`
 *   – Picks up all built-in HTML <input> props (value, onChange, type, placeholder, etc.)
 *   – Strips out the `ref` prop so your wrapper component isn’t expected to forward refs
 *
 * • Why use it for input wrappers
 *   – **Auto-infers** all standard input attributes & event handlers without manual typing
 *   – **Keeps your API surface** in sync with React’s own typings as they evolve
 *   – **Prevents** consumers from passing a `ref` prop if you’re not using `forwardRef`
 *
 * • Basic pattern
 *   ```ts
 *   import type { ComponentPropsWithoutRef } from 'react'
 *
 *   // 1) Define your props
 *   //    all standard <input> props + your custom ones
 *   type TextInputProps = ComponentPropsWithoutRef<'input'> & {
 *     label?: string
 *     error?: string
 *   }
 *
 *   // 2) Use rest/spread to pass through native props
 *   export function TextInput({ label, error, ...inputProps }: TextInputProps) {
 *     return (
 *       <div>
 *         {label && <label>{label}</label>}
 *         <input {...inputProps} />
 *         {error && <span className="error">{error}</span>}
 *       </div>
 *     )
 *   }
 *   ```
 *
 * • Ref vs. no-ref
 *   – If you need to forward refs: use `ComponentPropsWithRef<'input'>` + `forwardRef<HTMLInputElement, Props>`
 *   – If you don’t forward refs: `ComponentPropsWithoutRef<'input'>` ensures any `ref` passed by mistake is a TS error
 *
 * • Tips
 *   – Avoid manual repetition of HTMLInputElement attributes (e.g. onChange, onFocus)
 *   – Combine with `Omit<>` or custom overrides to prevent specific props:
 *     `Omit<ComponentPropsWithoutRef<'input'>, 'type'> & { type: 'email' }`
 *   – Works the same for other elements: `ComponentPropsWithoutRef<'button'>`, `<select>`, etc.
 */

/**
 * TypeScript Utility Types Cheat Sheet
 *
 * 1. Omit<T, K>
 *    – Exclude keys K from T
 *    type User = { id: string; name: string; email: string }
 *    type UserNoEmail = Omit<User, 'email'>  // { id: string; name: string }
 *
 * 2. Pick<T, K>
 *    – Select only keys K from T
 *    type UserIDName = Pick<User, 'id' | 'name'>  // { id: string; name: string }
 *
 * 3. Partial<T>
 *    – Make all properties in T optional
 *    type PartialUser = Partial<User>  // { id?: string; name?: string; email?: string }
 *
 * 4. Required<T>
 *    – Make all properties in T required
 *    type AllRequiredUser = Required<PartialUser>  // back to { id: string; name: string; email: string }
 *
 * 5. Readonly<T>
 *    – Make all properties in T readonly
 *    type ReadonlyUser = Readonly<User>  // cannot reassign any field
 *
 * 6. Record<K extends keyof any, T>
 *    – Construct an object type whose keys are K and values are T
 *    type Roles = 'admin' | 'editor' | 'viewer'
 *    type Permissions = Record<Roles, boolean>
 *    // { admin: boolean; editor: boolean; viewer: boolean }
 *
 * 7. Exclude<T, U>
 *    – Exclude from T all types that are assignable to U
 *    type Letters = 'a' | 'b' | 'c'
 *    type NoAorB = Exclude<Letters, 'a' | 'b'>  // 'c'
 *
 * 8. Extract<T, U>
 *    – Extract from T all types that are assignable to U
 *    type OnlyAB = Extract<Letters, 'a' | 'x'>  // 'a'
 *
 * 9. NonNullable<T>
 *    – Exclude null and undefined from T
 *    type MaybeString = string | null | undefined
 *    type DefinitelyString = NonNullable<MaybeString>  // string
 *
 * 10. ReturnType<F>
 *     – Obtain the return type of function F
 *     function fn(): { success: boolean } { … }
 *     type FnReturn = ReturnType<typeof fn>  // { success: boolean }
 *
 * 11. Parameters<F>
 *     – Obtain the parameter tuple type of function F
 *     function greet(name: string, age: number): void { … }
 *     type GreetParams = Parameters<typeof greet>  // [string, number]
 *
 * 12. ConstructorParameters<F>
 *     – Obtain the constructor parameter tuple type of class F
 *
 * 13. InstanceType<F>
 *     – Obtain the instance type returned by new F()
 *
 * ————————————————————————————————————————————————————————————
 *   Combine and compose these to shape types without repetition,
 *   enforce API contracts, and keep your code DRY and expressive.
 */
