![Brand](https://github.com/MiguelCastro9/field-validator-form/raw/master/assets/brand.png)

# field-validator-form

Universal field validator made in TypeScript, compatible with **React**, **Vue** and **Angular**. Ideal for checking required fields, email, currency values ​​and empty fields.

## Features

-  Required field validation
-  Empty field validation
-  E-mail field validation
-  Currency field validation and formatting
-  Compatible with React, Vue and Angular
-  Typed with TypeScript

## Installation

```bash
npm install field-validator-form
```

## Use

```ts
<script setup lang="ts">
import { ref, computed } from 'vue'
import { validate, required, email, notEmpty, currency } from 'field-validator-form'

const email = ref('')
const errors = computed(() => validate(email.value, [required, email]))
</script>

<template>
  <n-form-item
    label="Email"
    :feedback="errors[0] || ''"
    :validation-status="errors.length ? 'error' : 'success'"
  >
    <n-input v-model:value="email" placeholder="Digite seu email" />
  </n-form-item>
</template>
```

---

### Currency Validation + Formatting

```ts
const rawCurrencyValue = ref('')
const currencyErrors = computed(() => validate(rawCurrencyValue.value, [required, currency]))

function formatCurrency(value: string) {
  const clean = value.replace(/\D/g, '')
  const number = Number(clean) / 100
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
}

const formattedCurrency = computed(() => formatCurrency(rawCurrencyValue.value))

function handleCurrencyInput(e: string) {
  rawCurrencyValue.value = e.replace(/\D/g, '')
}
```

```vue
<n-input
  :value="formattedCurrency"
  @input="handleCurrencyInput"
  placeholder="Enter the value"
/>
```

## Props

| Prop         | Description                            |
|--------------|----------------------------------------|
| `required`   | required field validation              |
| `notEmpty`   | empty field validation                 |
| `email`      | e-mail field validation                |
| `currency`   | currency field validation              |


## Licence

MIT



