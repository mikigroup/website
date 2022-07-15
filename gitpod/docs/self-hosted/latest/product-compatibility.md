---
section: self-hosted/latest
subsection: reference
title: Product Compatibility
---

<script context="module">
  export const prerender = true;
</script>

# Product Compatibility

The following tables explain what dependencies Gitpod has, and with what versions of said dependencies it is compatible. This is the source of truth of what Gitpod is compatible with.

> **Note:** If you do find the type or version of a component you are using is not listed here, please do [reach out to us](../../../contact/sales).

> **Note:** Please see our description on [Gitpod Self-Hosted's dependencies](./required-components) for background on why these components are needed and what they are used for.

<!-- Using a site like https://tableconvert.com/markdown-to-markdown helps facilitates working on this table. You can make your edits there and then copy paste it here -->

| **Category**                                                                                   | **Component**                    | **Status**                                                                                                                                    | **Support Policy**                                                                      | **Currently Supported Versions**                                                        |
| ---------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Orchestration System                                                                           | Kubernetes                       | supported                                                                                                                                     | the last minor three releases                                                           | 1.22, 1.23 and 1.24                                                                     |
| Orchestration Platform                                                                         | Google Kubernetes Engine (GKE)   | supported (Dataplane V2 unsupported, Not supported in [combination with self-signed certs](https://github.com/gitpod-io/gitpod/issues/11168)) | current default                                                                         | current default                                                                         |
| Orchestration Platform                                                                         | Elastic Kubernetes Service (EKS) | supported                                                                                                                                     | current default                                                                         | current default                                                                         |
| Orchestration Platform                                                                         | Azure Kubernetes Service (AKS)   | supported                                                                                                                                     | current default                                                                         | current default                                                                         |
| Orchestration Platform                                                                         | K3s                              | limited support                                                                                                                               |                                                                                         |
| Container Network Interface (CNI)                                                              | Calico VXLAN                     | supported                                                                                                                                     | default                                                                                 | default                                                                                 |
| Container Runtime                                                                              | containerd                       | supported                                                                                                                                     | the last three minor releases                                                           | 1.4, 1.5 and 1.6.                                                                       |
| Operating System                                                                               | Linux (kernel)                   | supported                                                                                                                                     | > 5.4                                                                                   | 5.4 &gt x &gt 5.15                                                                      |
| Operating System                                                                               | Linux (distribution)             | supported                                                                                                                                     | Ubuntu LTS and latest                                                                   | Ubuntu 18.04, Ubuntu 20.04 and Ubuntu 22.04                                             |
| [**Certificate Management**](./required-components#cert-manager)                               | Cert-Manager                     | supported                                                                                                                                     | any version that implements cert-manager.io/v1                                          | any version that implements cert-manager.io/v1                                          |
| [**Database**](./required-components#database)                                                 | MySQL                            | supported                                                                                                                                     | 5.7                                                                                     | 5.7                                                                                     |
| [**Bucket Storage**](./required-components#bucket-storage)                                     | MinIO                            | supported                                                                                                                                     |                                                                                         |
| [**Bucket Storage**](./required-components#bucket-storage)                                     | Google Cloud Storage             | supported                                                                                                                                     | default                                                                                 | default                                                                                 |
| [**Bucket Storage**](./required-components#bucket-storage)                                     | AWS S3                           | supported                                                                                                                                     | default                                                                                 | default                                                                                 |
| [**Image Registry**](./required-components#image-registry)                                     | Docker Registry                  | supported                                                                                                                                     | [Docker Registry HTTP API V2](https://docs.docker.com/registry/spec/api/) specification | [Docker Registry HTTP API V2](https://docs.docker.com/registry/spec/api/) specification |
| [**Image Registry**](./required-components#image-registry)                                     | Google Container Registry        | supported                                                                                                                                     | default                                                                                 | default                                                                                 |
| [**Image Registry**](./required-components#image-registry)                                     | AWS S3 (Minio + S3) \*           | supported                                                                                                                                     |                                                                                         |
| [**Image Registry**](./required-components#image-registry)                                     | Artifactory                      | limited support                                                                                                                               |                                                                                         |
| [**Image Registry**](./required-components#image-registry)                                     | Sonotype Nexus                   | limited support                                                                                                                               |                                                                                         |
| [**Source Control Management System**](./required-components#source-control-management-system) | GitHub.com                       | supported                                                                                                                                     | current                                                                                 | current                                                                                 |
| [**Source Control Management System**](./required-components#source-control-management-system) | GitLab.com                       | supported                                                                                                                                     | current                                                                                 | current                                                                                 |
| [**Source Control Management System**](./required-components#source-control-management-system) | Bitbucket.org                    | supported                                                                                                                                     | current                                                                                 | current                                                                                 |
| [**Source Control Management System**](./required-components#source-control-management-system) | GitLab Self-Managed              | supported                                                                                                                                     | LTS (14.x)                                                                              | LTS (14.x)                                                                              |
| [**Source Control Management System**](./required-components#source-control-management-system) | Bitbucket Server                 | supported                                                                                                                                     | Starting v7.20 (jan 22)                                                                 | Starting v7.20 (jan 22)                                                                 |
| [**Source Control Management System**](./required-components#source-control-management-system) | GitHub Enterprise                | supported                                                                                                                                     |                                                                                         |

<details>
  <summary  class="text-p-medium">*ECR incompatibility</summary>

Amazon Elastic Container Registry (ECR) does not implement this spec fully. The spec expects
that, if an image is pushed to a repository that doesn't exist, it creates the
repository before uploading the image. Amazon ECR does not do this - if the
repository doesn't exist, it will error on push.

To configure Gitpod to use Amazon, you will need to use the in-cluster
registry and configure it to use S3 storage as the backend storage.

```yaml
containerRegistry:
  inCluster: true
  s3storage:
    bucket: <name of bucket>
    certificate:
      kind: secret
      name: s3-storage-token
```

The secret expects to have two keys:

- `s3AccessKey`
- `s3SecretKey`

</details>
