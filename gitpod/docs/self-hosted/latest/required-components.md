---
section: self-hosted/latest
subsection: background
title: Components & Dependencies
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Self-Hosted Dependencies

> **Note:** For an up to date list of which versions of which components Gitpod Self-Hosted is compatible with, please see the [product compatibility](./product-compatibility) page.

Gitpod relies on certain components and services for it to function. By default, most of these can be automatically installed in-cluster during installation. However, you can also configure Gitpod to use your own version of these that may or may not live inside the cluster. <!--- todo: When do we advise these to be run outside of cluster? --->

| Component                                                                                  | Requirement                   |
| ------------------------------------------------------------------------------------------ | ----------------------------- |
| [Bucket Storage](./required-components#bucket-storage)                                     | Use default or bring your own |
| [Database](./required-components#database)                                                 | Use default or bring your own |
| [Image Registry](./required-components#image-registry)                                     | Use default or bring your own |
| [Source Control Management System](./required-components#source-control-management-system) | Use default or bring your own |
| [Cert-manager](./required-components#cert-manager)                                         | Require                       |

## Bucket Storage

By default, MinIO is installed in the cluster to store static content and to back an in-cluster image registry. During the installation, process you can also configure Gitpod to use your own storage provider.

## Database

Gitpod uses a MySQL database to store user data. By default Gitpod ships with a MySQL database built-in and data is stored using a Kubernetes PersistentVolume. For production settings, we recommend operating your own MySQL database (version v5.7 or newer). Which database is used (cluster-internal or an existing external one) can be configured during installation.

## Image Registry

Gitpod relies on an image registry to store images used to start workspaces. By default, a docker-based image registry backed by MiniIO is installed in the cluster (this can be configured during the installation). However, Gitpod is also compatible with any registry that implements the [Docker Registry HTTP API V2](https://docs.docker.com/registry/spec/api/) specification.

## Source Control Management System

Gitpod expects to be connected to a Source Control Management System (SCM) such as GitLab in order to function. You can find out more about which SCMs are supported and how to connect to them in the [Integrations](../../integrations) section. You will also be guided through connecting your SCM once you access your Gitpod installation for the first time.

## Cert Manager

[Cert-manager](https://cert-manager.io/) must be installed in your cluster before you can install Gitpod. It is used to create and manage certificates needed to secure communication between the various internal Gitpod components. See the [getting started guide](./getting-started#step-2-install-cert-manager) for details on how to install cert-manager.
