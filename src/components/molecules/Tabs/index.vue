<template>
  <WrapTabs>
    <TabHeader>
      <TabNav>
        <TabAncora
          v-for="tab in props.tabs"
          :key="tab.id"
          :id="ID_TAB_PREFIX + tab.id"
          :value="tab"
          :active-id="vModel"
          @on-click="() => handleClickTabAncora(tab)"
        >
          <span v-if="!$slots[`label_${tab.id}`]" v-text="tab.label" />
          <slot v-else :name="`label_${tab.id}`" :data="tab" />
        </TabAncora>
      </TabNav>

      <LineActive :id="ID_INDICATOR" />
      <LineDivisor />
    </TabHeader>

    <TabSection :id="ID_TAB_SECTION">
      <slot v-if="$slots['section']" name="section" />

      <div v-else>
        <TabArticle v-for="tab in props.tabs" :key="tab.id" :id="tab.id">
          <slot v-if="vModel === tab.id" :name="tab.id" :data="tab" />
        </TabArticle>
      </div>
    </TabSection>
  </WrapTabs>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

import WrapTabs from "@/components/atoms/tabs/WrapTabs/index.vue";
import TabHeader from "@/components/atoms/tabs/Header/index.vue";
import TabNav from "@/components/atoms/tabs/Header/Nav/index.vue";
import TabAncora from "@/components/atoms/tabs/Header/Nav/Ancora/index.vue";
import LineActive from "@/components/atoms/tabs/Header/lines/LineActive/index.vue";
import LineDivisor from "@/components/atoms/tabs/Header/lines/LineDivisor/index.vue";
import TabSection from "@/components/atoms/tabs/Section/index.vue";
import TabArticle from "@/components/atoms/tabs/Section/Article/index.vue";

import type TabsPropsInterface from "@/components/molecules/Tabs/types/PropsInterface";
import type TabInterface from "@/components/molecules/Tabs/types/TabInterface";

const vModel = defineModel<string | number>({
  required: true,
  default: "",
});
const props = defineProps<TabsPropsInterface>();

const ID_TAB_PREFIX = "__ancora-";
const ID_INDICATOR = ref(
  `__indicator-${Math.random().toString(36).slice(2, 10)}`
);
const ID_TAB_SECTION = ref(
  `__tab-section-${Math.random().toString(36).slice(2, 10)}`
);

const idTabSelected = computed(() => ID_TAB_PREFIX + vModel.value);
const elementTabSelected = computed(() =>
  document.getElementById(idTabSelected.value)
);
const elementTabLineActive = computed(() =>
  document.getElementById(ID_INDICATOR.value)
);

watch(
  () => vModel.value,
  (newVal) => {
    if (!!newVal) setTabLineActiveSelected();
  }
);

const handleClickTabAncora = (tab: TabInterface): void => {
  vModel.value = tab.id;
  const element = document.getElementById(tab.id?.toString());
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
};

const setTabLineActiveSelected = (): void => {
  if (!elementTabSelected.value) return;

  const { offsetLeft, offsetWidth } = elementTabSelected.value;
  elementTabLineActive.value?.animate(
    {
      transform: `translateX(${offsetLeft}px)`,
      width: `${offsetWidth}px`,
    },
    {
      duration: 80,
      fill: "both",
    }
  );
};

onMounted(() => {
  setTabLineActiveSelected();
});
</script>
