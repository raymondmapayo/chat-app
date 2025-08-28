"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { File, Inbox, Send, Trash2 } from "lucide-react";

export default function MessengerLayout({
  children,
}: {
  children?: React.ReactNode; // 🔥 make children optional so no error
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="w-64">
        {/* Sidebar Header */}
        <SidebarHeader>
          <h2 className="text-lg font-bold px-2">Messenger</h2>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Inbox className="mr-2 h-4 w-4" />
                    Inbox
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Send className="mr-2 h-4 w-4" />
                    Sent
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <File className="mr-2 h-4 w-4" />
                    Drafts
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Trash
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Sidebar Footer with sticky user + trigger */}
        <SidebarFooter className="sticky bottom-0 bg-background">
          <div className="flex items-center justify-between w-full px-2 py-2">
            {/* User info */}
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">John Doe</span>
            </div>
            {/* Sidebar Trigger */}
            <SidebarTrigger />
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Main content */}
      <SidebarInset>
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
