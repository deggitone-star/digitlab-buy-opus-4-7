"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

type Variant = "audit" | "contact";

type FormState = {
  name: string;
  contact: string;
  site: string;
  need: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", contact: "", site: "", need: "", message: "" };

const needOptions = [
  "Аудит сайта",
  "Лендинг",
  "Доработка сайта",
  "Сайт с нуля",
  "Пока не определился",
];

function validate(state: FormState, variant: Variant): Errors {
  const errors: Errors = {};
  if (state.name.trim().length < 2) {
    errors.name = "Укажите имя (минимум 2 символа)";
  }
  if (state.contact.trim().length < 3) {
    errors.contact = "Укажите телефон или Telegram";
  }
  // Сайт обязателен только для аудита
  if (variant === "audit" && state.site.trim().length < 4) {
    errors.site = "Укажите ссылку на сайт";
  }
  return errors;
}

export default function ContactForm({
  variant = "contact",
}: {
  variant?: Variant;
}) {
  const [state, setState] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setState((s) => ({ ...s, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((er) => ({ ...er, [field]: undefined }));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate(state, variant);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    // Заглушка — здесь позже подключим Telegram Bot API / Formspree / email
    // eslint-disable-next-line no-console
    console.log("Form submission:", { variant, ...state });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-soft/50 p-8 text-center shadow-card">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="text-xl font-semibold text-ink">
          Заявка подготовлена
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Позже подключим отправку в Telegram или email. Пока вы можете
          написать напрямую — контакты есть в шапке и подвале сайта.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-card md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Имя"
          name="name"
          value={state.name}
          onChange={update("name")}
          error={errors.name}
          placeholder="Как к вам обращаться"
          required
        />
        <Field
          label="Телефон или Telegram"
          name="contact"
          value={state.contact}
          onChange={update("contact")}
          error={errors.contact}
          placeholder="+7… или @username"
          required
        />
        <Field
          label="Ссылка на сайт"
          name="site"
          value={state.site}
          onChange={update("site")}
          error={errors.site}
          placeholder="https:// (если есть)"
          required={variant === "audit"}
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <label htmlFor="need" className="mb-2 block text-sm font-medium text-ink-700">
            Что нужно
          </label>
          <select
            id="need"
            name="need"
            value={state.need}
            onChange={update("need")}
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink transition-colors hover:border-muted-light focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-ring"
          >
            <option value="">Выберите вариант</option>
            {needOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <TextareaField
          label="Короткое описание задачи"
          name="message"
          value={state.message}
          onChange={update("message")}
          placeholder="Например: есть сайт, но мало заявок / нужен лендинг под услугу / хочу запустить рекламу / нужен сайт для компании."
          className="md:col-span-2"
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-light">
          Нажимая кнопку, вы соглашаетесь, что мы свяжемся с вами по указанным
          контактам.
        </p>
        <Button type="submit" size="lg">
          {variant === "audit" ? "Заказать аудит" : "Отправить заявку"}
        </Button>
      </div>
    </form>
  );
}

/* --- Поля --- */

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-ink-700"
      >
        {label}
        {required && <span className="ml-1 text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder-muted-light transition-colors focus:outline-none focus:ring-2 focus:ring-brand-ring ${
          error
            ? "border-red-500/60"
            : "border-line hover:border-muted-light focus:border-brand"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaFieldProps = Omit<FieldProps, "onChange"> & {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextareaField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  className = "",
}: TextareaFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-ink-700"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder-muted-light transition-colors hover:border-muted-light focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-ring"
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
