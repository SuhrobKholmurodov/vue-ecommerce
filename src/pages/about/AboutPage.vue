<script setup lang="ts">
import {
  Car,
  ShieldCheck,
  Wrench,
  Truck,
  Users,
} from "lucide-vue-next"
import Badge from "../../shared/components/ui/badge/Badge.vue";
import Separator from "../../shared/components/ui/separator/Separator.vue";
import Card from "../../shared/components/ui/card/Card.vue";
import CardHeader from "../../shared/components/ui/card/CardHeader.vue";
import CardContent from "../../shared/components/ui/card/CardContent.vue";
import Button from "../../shared/components/ui/button/Button.vue";
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="max-w-3xl mb-10">
      <Badge class="mb-3">About us</Badge>
      <h2 class="text-3xl font-bold mb-4">
        Auto Parts & Accessories Store
      </h2>
      <p class="text-muted-foreground">
        We provide high-quality auto parts, tools, and accessories for all types
        of vehicles. Trusted by drivers, mechanics, and auto enthusiasts.
      </p>
    </div>

    <Separator class="my-10" />

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader class="flex items-center gap-3">
          <Car class="h-6 w-6 text-primary" />
          <CardTitle>Wide Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Parts and accessories for cars, SUVs, and trucks.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex items-center gap-3">
          <ShieldCheck class="h-6 w-6 text-primary" />
          <CardTitle>Warranty</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Only certified products with official warranty.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex items-center gap-3">
          <Wrench class="h-6 w-6 text-primary" />
          <CardTitle>Quality Parts</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Tested and reliable parts for long-term use.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex items-center gap-3">
          <Truck class="h-6 w-6 text-primary" />
          <CardTitle>Fast Delivery</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Quick shipping and safe packaging.
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-2 text-muted-foreground">
        <Users class="h-5 w-5" />
        <span>Trusted by thousands of customers</span>
      </div>

      <Button size="lg">
        View Products
      </Button>
    </div>
  </section>
</template>
