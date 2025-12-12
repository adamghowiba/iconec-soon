'use client';

import { FC, useState } from 'react';
import { Input } from './Input';
import { XIcon } from './Icons/XIcon';
import { Button } from './Button';
import { cn } from 'tailwind-variants';
import { useForm } from '@tanstack/react-form';
import { WaitlistSchema, waitlistSchema } from '@/form-schema';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle } from './Icons/CheckCircle';
import PhoneInput from 'react-phone-number-input/input';

export interface ContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ContactForm: FC<ContactFormProps> = ({ isOpen = false, onClose }) => {
  const submitWaitlist = useMutation({
    mutationFn: async (values: WaitlistSchema) => {
      const response = await fetch('/api/waitlist', {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || { message: 'Something went wrong' });
      }

      return data;
    },
  });

  const form = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone_number: '+971',
      email: '',
    } as WaitlistSchema,
    validators: {
      onBlur: waitlistSchema,
    },
    onSubmit: async values => {
      await submitWaitlist.mutateAsync(values.value);
      values.formApi.reset();
    },
  });

  return (
    <aside
      className={`
        fixed inset-0 flex items-center justify-center max-mobile:overflow-auto
        transition-all duration-300 ease-out z-20 bg-black/40 max-mobile:flex-col max-mobile:justify-start max-mobile:py-10
        ${
          isOpen
            ? 'opacity-100 backdrop-blur-[75px] pointer-events-auto'
            : 'opacity-0 backdrop-blur-0 pointer-events-none'
        }
      `}
    >
      {submitWaitlist.isSuccess ? (
        <div className="flex flex-col items-center text-center gap">
          <CheckCircle className="mb-4 size-7" />
          <span className="pb-2 text-lg">You&apos;re on the list</span>

          <span className="pb-9.25 text-[rgba(255,255,255,0.60)]">
            We&apos;ll be in touch soon with your early access invitation.
          </span>
          <Button variant="outline" size="large" className="w-fit" onClick={onClose}>
            Back to home
          </Button>
        </div>
      ) : (
        <>
          <button
            className={cn(
              'absolute top-[8%] left-[8%] ring-1 ring-white rounded-full size-11 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer',
              'max-mobile:relative max-mobile:size-9 max-mobile:top-0 max-mobile:left-0 max-mobile:mr-auto max-mobile:ml-6 max-mobile:mb-9 shrink-0'
            )}
            onClick={onClose}
          >
            <XIcon className="text-red-500" />
          </button>

          <div
            className={`
          transition-all duration-300 ease-out
          ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'}
        `}
          >
            <div className="max-w-130.25 w-full px-6">
              <header className="flex flex-col gap-2 pb-10">
                <h1 className="max-mobile:text-base">Your monthly Diamond Ritual Begins Soon.</h1>
                {submitWaitlist.error ? (
                  <h2 className="text-red-500 max-mobile:text-base">
                    {submitWaitlist.error.message || 'Something went wrong. Please try again later.'}
                  </h2>
                ) : (
                  <h2 className="text-[#FFFFFF99] max-mobile:text-base">
                    Be the first to access monthly diamond pieces and exclusive previews
                  </h2>
                )}
              </header>

              <div className="flex items-center flex-col gap-10 w-full max-mobile:gap-4">
                <div className="flex items-start gap-6 text-white w-full max-mobile:flex-col max-mobile:gap-[inherit]">
                  <form.Field name="first_name">
                    {field => (
                      <div className="flex flex-col gap-1 w-full">
                        <label htmlFor={field.name}>First name</label>

                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={event => field.handleChange(event.target.value)}
                        />

                        {!!field.state.meta.errors.length && field.state.meta.isTouched && (
                          <span className="text-red-400 italic text-sm">{field.state.meta.errors[0]?.message}</span>
                        )}
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="last_name">
                    {field => (
                      <div className="flex flex-col gap-1 w-full">
                        <label htmlFor={field.name}>Last Name</label>

                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={event => field.handleChange(event.target.value)}
                        />

                        {!!field.state.meta.errors.length && field.state.meta.isTouched && (
                          <span className="text-red-400 italic text-sm">{field.state.meta.errors[0]?.message}</span>
                        )}
                      </div>
                    )}
                  </form.Field>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <form.Field name="phone_number">
                    {field => (
                      <div className="flex flex-col gap-1 w-full">
                        <label htmlFor={field.name}>Contact Number</label>

                        <PhoneInput
                          international
                          countryCallingCodeEditable={false}
                          defaultCountry="AE"
                          inputComponent={Input}
                          value={field.state.value}
                          onChange={value => field.handleChange(value || '')}
                        />

                        {!!field.state.meta.errors.length && field.state.meta.isTouched && (
                          <span className="text-red-400 italic text-sm">{field.state.meta.errors[0]?.message}</span>
                        )}
                      </div>
                    )}
                  </form.Field>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <form.Field name="email">
                    {field => (
                      <div className="flex flex-col gap-1 w-full">
                        <label htmlFor={field.name}>Email</label>

                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={event => field.handleChange(event.target.value)}
                        />

                        {!!field.state.meta.errors.length && field.state.meta.isTouched && (
                          <span className="text-red-400 italic text-sm">{field.state.meta.errors[0]?.message}</span>
                        )}
                      </div>
                    )}
                  </form.Field>
                </div>

                <form.Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
                  {([canSubmit, isSubmitting]) => (
                    <Button
                      variant="outline"
                      size="large"
                      className="mr-auto h-13 max-mobile:mt-[40px]"
                      disabled={!canSubmit || isSubmitting}
                      onClick={form.handleSubmit}
                    >
                      {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                    </Button>
                  )}
                </form.Subscribe>
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};
