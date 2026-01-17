<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/components/ui/card"
import { Input } from "../../shared/components/ui/input"
import { Textarea } from "../../shared/components/ui/textarea"
import { Button } from "../../shared/components/ui/button"
import { Separator } from "../../shared/components/ui/separator"
import { Badge } from "../../shared/components/ui/badge"

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-vue-next"
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="max-w-3xl mb-10">
      <Badge class="mb-3">Contacts</Badge>
      <h2 class="text-3xl font-bold mb-4">
        Get in touch with us
      </h2>
      <p class="text-muted-foreground">
        Have questions or need help? Contact us — we’re always ready to help.
      </p>
    </div>

    <Separator class="my-10" />

    <div class="grid gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Contact information</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-center gap-3">
            <Mail class="h-5 w-5 text-primary" />
            <span>example@mail.com</span>
          </div>

          <div class="flex items-center gap-3">
            <Phone class="h-5 w-5 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>

          <div class="flex items-center gap-3">
            <MapPin class="h-5 w-5 text-primary" />
            <span>New York, USA</span>
          </div>

          <div class="flex items-center gap-3">
            <Clock class="h-5 w-5 text-primary" />
            <span>Mon – Fri: 9:00 – 18:00</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Email address" />
          <Textarea placeholder="Your message" rows="4" />
          <Button class="w-full">Send message</Button>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
