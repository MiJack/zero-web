<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider >
            <UserProfile/>
            <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
                <a-menu-item key="1">
                    <a-icon type="pie-chart"/>
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop"/>
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="user"/><span>User</span></span>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="team"/><span>Team</span></span>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="file"/>
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>

            <a-layout-header style="background: #fff; padding: 20px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>

            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                Bill is a cat.
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
    import UserProfile from "@/components/user/UserProfile";

    export default {
        components: {UserProfile},
        data() {
            return {
                collapsed: false,
            };
        },
    };
</script>

<style>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>
