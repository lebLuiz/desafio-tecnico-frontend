<template>
  <section flex flex-col gap-y-3 flex-1>
    <article flex flex-col>
      <small text-desc text-fonts-regular-400>Status da tarefa</small>
      <Message :severity="severityMessageTask" w-min-content>
        <div :class="iconStatusTask" size-4 />
        {{ textStatusTask }}
      </Message>
    </article>

    <article flex flex-col>
      <small inline-flex gap-x-1 text-desc text-fonts-regular-400
        ><div i-mdi:document color-blue-800 size-4 />
        Tipo</small
      >
      <p text-body4 text-fonts-semibold-600 m-0>
        {{ props.strSteType }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Message from "@/components/atoms/Message.vue";
import type { TaskStatusType } from "@/entities/types/tasks/TaskStatusType";
import type { SeverityType as MessageSeverityType } from "@/entities/types/components/atoms/Message/SeverityType";

const props = defineProps<{
  strTaskStatus: TaskStatusType;
  strSteType: string;
}>();

const severityMessageTask = computed<MessageSeverityType>(
  () =>
    ({
      pending: "danger",
      waiting: "warning",
      finished: "success",
      canceled: "danger",
    })[props.strTaskStatus] as MessageSeverityType
);
const textStatusTask = computed(
  () =>
    ({
      pending: "Pendente",
      waiting: "Aguardando",
      finished: "Preenchida",
      canceled: "Cancelada",
    })[props.strTaskStatus] as MessageSeverityType
);
const iconStatusTask = computed(
  () =>
    ({
      pending: "i-mdi:user-clock color-status-danger-main",
      waiting: "i-mdi:clock color-status-warning-main",
      finished: "i-mdi:check color-status-success-main",
      canceled: "i-mdi:alert-outline color-status-danger-main",
    })[props.strTaskStatus] as string
);
</script>
